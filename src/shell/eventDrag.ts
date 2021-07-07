export class IframeEvt {
  renderId: string;

  iframeRef: Window;

  constructor(renderId: string, iframeRef: Window) {
    this.renderId = renderId
    this.iframeRef = iframeRef
    this.initBindMessage()
  }

  initBindMessage() {
    window.addEventListener('message', evt => {
      const message = evt.data

      if (message.renderId === this.renderId) {
        this.iframeRef.postMessage(message.data, '/')
      }
    })
  }
}

export default IframeEvt
