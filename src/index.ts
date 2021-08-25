interface Authenticate {
  login(user: string, password: string): string;
}

class Azure implements Authenticate {
  login(user: string, password: string): string {
    console.log('Azure:', user, password);
    return 'success';
  }
}

class Firebase implements Authenticate {
  login(user: string, password: string): string {
    console.log('Firebase:', user, password);
    return 'success';
  }
}

class Foo {
  constructor(private authenticate: Authenticate) { }

  bar() {
    this.authenticate.login('adanyc', '123456');
  }
}

const foo1 = new Foo(new Azure());
foo1.bar();

const foo2 = new Foo(new Firebase());
foo2.bar();