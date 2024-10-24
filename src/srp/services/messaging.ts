class Messaging {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada!', msg);
  }
}

export const messaging = new Messaging();
