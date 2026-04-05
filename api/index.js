export default function handler(req, res) {
  try {
    const uaRaw = req.headers['user-agent'] || "";
    const ua = uaRaw.toLowerCase();

    // ✅ อนุญาตเฉพาะ Roblox / executor (ที่ไม่มี UA)
    const allow =
      ua.includes("roblox") || // Roblox จริง
      ua === "" ||             // executor บางตัว
      ua.includes("studio");   // Roblox Studio

    if (allow) {
      res.setHeader('Content-Type', 'text/plain');

      res.status(200).send(`
print("ZeIoNhUb: โหลดสำเร็จ!")

-- main script
loadstring(game:HttpGet("https://pastebin.com/raw/vJpmsg0Y"))()
      `);

    } else {
      // ❌ คนเปิดผ่าน browser
      res.status(404).send("404: NOT FOUND");
    }

  } catch (err) {
    res.status(500).send("Error");
  }
}
