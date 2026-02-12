import { NextRequest } from 'next/server';

const MOBILE_VIEWPORT_WIDTH = 375;
const MOBILE_VIEWPORT_HEIGHT = 791;

/**
 * Injected script runs before any other script so the embedded page
 * (e.g. Wix) sees a mobile viewport via window.innerWidth, matchMedia, etc.
 */
const VIEWPORT_OVERRIDE_SCRIPT = `
(function(){
  var w = ${MOBILE_VIEWPORT_WIDTH}, h = ${MOBILE_VIEWPORT_HEIGHT};
  try {
    Object.defineProperty(window, 'innerWidth', { get: function(){ return w; }, configurable: true });
    Object.defineProperty(window, 'innerHeight', { get: function(){ return h; }, configurable: true });
    Object.defineProperty(window, 'outerWidth', { get: function(){ return w; }, configurable: true });
    Object.defineProperty(window, 'outerHeight', { get: function(){ return h; }, configurable: true });
  } catch(e) {}
  var origMatchMedia = window.matchMedia;
  window.matchMedia = function(mediaQuery) {
    var m = origMatchMedia ? origMatchMedia.call(window, mediaQuery) : null;
    var maxW = mediaQuery.match(/max-width:\\s*(\\d+)/);
    var minW = mediaQuery.match(/min-width:\\s*(\\d+)/);
    var matches = false;
    if (maxW) matches = w <= parseInt(maxW[1], 10);
    else if (minW) matches = w >= parseInt(minW[1], 10);
    else if (m) return m;
    return {
      matches: matches,
      media: mediaQuery,
      addListener: function(){},
      removeListener: function(){},
      addEventListener: function(){},
      removeEventListener: function(){},
      dispatchEvent: function(){ return true; }
    };
  };
})();
`;

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  if (!url || !url.startsWith('http')) {
    return new Response('Missing or invalid url parameter', { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
      },
    });
    const html = await res.text();

    const baseUrl = new URL(url);
    const baseHref = baseUrl.origin + baseUrl.pathname;
    const baseTag = `<base href="${baseHref}">`;

    // Inject base tag and viewport-override script at the very start of <head> so relative URLs resolve to Wix and script runs before any other
    const injectScript = `${baseTag}<script>${VIEWPORT_OVERRIDE_SCRIPT}</script>`;
    let modifiedHtml: string;
    if (html.includes('<head>')) {
      modifiedHtml = html.replace('<head>', `<head>${injectScript}`);
    } else if (html.includes('<head ')) {
      modifiedHtml = html.replace(/<head\s[^>]*>/, (match) => match + injectScript);
    } else {
      modifiedHtml = injectScript + html;
    }

    return new Response(modifiedHtml, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (err) {
    console.error('mobile-preview fetch error:', err);
    return new Response('Failed to load preview', { status: 502 });
  }
}
