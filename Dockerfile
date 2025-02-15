# ใช้ Node.js เวอร์ชัน 18 บน Alpine Linux
FROM node:18.18-alpine

# กำหนด working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ yarn.lock (ถ้ามี)
COPY package.json yarn.lock ./

# ติดตั้ง dependencies
RUN yarn install

# ปิดการส่ง telemetry ของ Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# คัดลอกไฟล์ทั้งหมดลง container
COPY . .

# ให้สิทธิ์ execute กับ entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# เปิด port 3000
EXPOSE 3000

# คำสั่งเริ่มต้น
CMD ["sh", "/app/entrypoint.sh"]

