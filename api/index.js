export default function handler(req, res) {
  try {
    const ua = req.headers['user-agent'] || "";
    const key = req.query.key;

    // 🔐 เงื่อนไขผ่าน (คุณใช้ได้)
    if (key === "123" || ua === "" || ua.toLowerCase().includes("roblox")) {

      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(`
print("ZeIoNhUb: โหลดสำเร็จ!")

-- โหลดสคริปหลัก
loadstring(game:HttpGet("pastebin.com/raw/vJpmsg0Y"))()
      `);

    } else {
      // ❌ คนอื่นเปิดเว็บ
      res.status(404).send("404: NOT FOUND");
    }

  } catch (err) {
    res.status(500).send("Error");
  }
}
