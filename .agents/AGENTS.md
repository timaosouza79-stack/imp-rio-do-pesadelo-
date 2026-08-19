
## Regras de Deploy e Cache
- Sempre que houver qualquer modificação no código ou nos arquivos do projeto, você deve abrir o arquivo `sw.js` e atualizar a versão do cache (variável `CACHE_NAME`, incrementando o número, por exemplo, de 'pesadelos-v6' para 'pesadelos-v7') para forçar a atualização da versão offline para todos os usuários.
- Sempre que concluir um pedido do usuário e o código estiver pronto, você deve **automaticamente** fazer o commit das mudanças (rodando `git add .` e `git commit -m "..."`) e enviar para o repositório remoto (rodando `git push`), sem precisar perguntar.
