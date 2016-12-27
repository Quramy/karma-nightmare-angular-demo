serve 'ng build && http-server -p 8080'
port 8080

before_build {
  run 'ndenv install v6.9.1'
  run 'ndenv rehash'
  run 'ndenv global v6.9.1'
  run 'curl -o- -L https://yarnpkg.com/install.sh | bash'
  run 'export PATH="$HOME/.yarn/bin:$PATH"'
  run 'ls $HOME/.yarn'
  run 'ls $HOME/.yarn/bin'
  run './$HOME/.yarn/bin install'
}
