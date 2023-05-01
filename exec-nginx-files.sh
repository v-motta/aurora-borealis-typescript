echo "Instalando pacotes"
sudo npm i

echo "Criando ambiente de produção"
sudo npm run build

echo "Copiando arquivos do /build/ para /var/www/html/"
sudo cp -r /home/react-website/aurora-borealis-typescript/build/* /var/www/html/

echo "Restartando o NGINX"
sudo systemctl restart nginx

echo "Site atualizado com sucesso"