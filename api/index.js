export default function handler(req, res) {
  try {
    const ua = req.headers['user-agent'] || "";

    // ✅ อนุญาต Roblox / executor
    if (ua === "" || ua.toLowerCase().includes("roblox")) {
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(`
print("ZeIoNhUb: โหลดสำเร็จ!")

-- โหลดสคริปใหม่
loadstring(game:HttpGet("https://pastebin.com/raw/uNyG7Yu5"))()
      `);
    } else {
      res.status(404).send("404: NOT FOUND");
    }

  } catch (err) {
    res.status(500).send("Error");
  }
}
