## antlr4 java protobuf parse demo
基于android apk反编译代码中protobuf协议java代码`MessageMicro.java`的解析演示

## antlr4文档

[antlr4文档](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)
[antlr4ts文档](https://github.com/tunnelvisionlabs/antlr4ts)

## 开发

```sh

# 下载grammars-v4 for java 
git clone https://github.com/antlr/grammars-v4.git

# 引入antlr4(未使用)
# cd /usr/local/lib
# curl -O https://www.antlr.org/download/antlr-4.9-complete.jar
# cp antlr-4.9-complete.jar /usr/local/lib/antlr-4.9-complete.jar
# export CLASSPATH=".:/usr/local/lib/antlr-4.9-complete.jar:CLASSPATH"
# alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.9-complete.jar:CLASSPATH" org.antlr.v4.Tool'
# alias grun='java -Xmx500M -cp "/usr/local/lib/antlr-4.9-complete.jar:CLASSPATH" org.antlr.v4.gui.TestRig'


# 生成JavaScript风格的代码(未使用)
# antlr4 -Dlanguage=JavaScript grammars-v4/java/java8/Java8Parser.g4 -o src/grammars-js
# antlr4 -Dlanguage=JavaScript grammars-v4/java/java8/Java8Lexer.g4 -o src/grammars-js

# 引入antlr4ts
npm install antlr4ts --save
npm install antlr4ts-cli --save-dev
cp node_modules/antlr4ts-cli/target/antlr4-typescript-4.9.0-SNAPSHOT-complete.jar /usr/local/lib/antlr4-typescript-4.9.0-SNAPSHOT-complete.jar
export CLASSPATH=".:/usr/local/lib/antlr4-typescript-4.9.0-SNAPSHOT-complete.jar:CLASSPATH"
alias antlr4ts='java -Xmx500M -cp "/usr/local/lib/antlr4-typescript-4.9.0-SNAPSHOT-complete.jar:CLASSPATH" org.antlr.v4.Tool'

# 生成TypeScript风格的代码
antlr4ts -Dlanguage=TypeScript -visitor grammars-v4/java/java8/Java8Parser.g4 -o src/grammars-ts
antlr4ts -Dlanguage=TypeScript -visitor grammars-v4/java/java8/Java8Lexer.g4 -o src/grammars-ts

# 仅构建
npm run build

# 构建及运行
npm run start
```