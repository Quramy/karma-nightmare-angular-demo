serve 'ng build && http-server -p 8080'
port 8080

before_build {
  run 'ndenv install v6.9.1'
  run 'ndenv rehash'
  run 'ndenv global v6.9.1'
  run 'curl -o- -L https://yarnpkg.com/install.sh | bash'
  run 'yarn install'
}
