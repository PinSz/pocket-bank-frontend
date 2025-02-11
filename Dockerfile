# ใช้ Node.js เวอร์ชันล่าสุด
FROM node:18-alpine

# กำหนด working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ yarn.lock
COPY package.json yarn.lock ./

# ติดตั้ง dependencies
RUN yarn install

# คัดลอกไฟล์ทั้งหมดลง container
COPY . .

# เปิด port 3000
EXPOSE 3000

# คำสั่งเริ่มต้น
CMD ["yarn", "dev"]
