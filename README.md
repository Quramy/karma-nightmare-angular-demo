# karma-nightmare-angular-demo
A working demonstration for visual regression testing of Angular application. 

This demo uses the following:

* [karma-nightmare](https://github.com/bokuweb/karma-nightmare): Nightmare launcher, which allows to capture Karma's state to .png file in my test code.
* [reg-cli](https://github.com/bokuweb/reg-cli): A simple images comparison tool.

## Install and run

This project was generated with [angular-cli](https://github.com/angular/angular-cli), so you can use the `ng` commanad.

```sh
npm install -g angular-cli
npm install
ng test
```

So .png files are generated into the `snapshot` directory.

And execute the following, reg-cli compares between the `snapshot` dir and the `expected` dir. It outputs a HTML report to `dist/reg_report.html`.

```sh
npm run reg
```

## License
MIT License

Copyright (c) 2016 Quramy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
