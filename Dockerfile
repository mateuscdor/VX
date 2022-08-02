
FROM aquabotwa/sanuwa-official:beta 

RUN git clone https://github.com/ennabamata/alisamagemanalisage /root/queendiana
WORKDIR /root/queendiana/
ENV TZ=Asia/Colombo
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
