export const WEB_VIEW_ORIGIN =
  process.env.NODE_ENV === 'development'
    ? 'http://172.30.1.5:3000'
    : 'https://hangang-now-react-web.vercel.app';

export function sendMessageCode<T, O>(data: { type: T; payload: O }): string {
  return `
  window.ReactNativeWebView.postMessage(
    JSON.stringify(${JSON.stringify(data)}),
  );
  `;
}

export function getAlignedCode(...codeSplits: string[]) {
  return codeSplits.join('');
}
