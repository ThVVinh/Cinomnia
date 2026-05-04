export function fakePayment(amount: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% success
      resolve(success);
    }, 2000);
  });
}

