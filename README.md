# React Mail

React Mail is a mail client written with React components.

## Instalation

To run ReactMail, you need node.js installed and setup, refer to your OS documentation for installation.

Clone the repository,

```
git clone git@github.com:b2l/react-mail.git
```

Install nodejs dependencies

```
cd react-mail
npm install
```

Then, you need react-tools CLI :
```
npm install react-tools -g
```

## Run

Compile the application :

```
jsx --harmony src .build
```

```
grunt build
```

Run a webserver to serve the application:

```
cd build
python -s SimpleHTTPServer
```

You can now visit [http://localhost:8000](http://localhost:8000)