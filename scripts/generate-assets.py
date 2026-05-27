"""Generate favicon.ico, PNG sizes, and OG image for Shrouded Guide."""
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    raise SystemExit("pip install pillow")

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SRC_FAV = PUBLIC / "favicon-source.png"
LOGO = PUBLIC / "logo.png"
OG_OUT = PUBLIC / "og-image.png"


def favicons():
    img = Image.open(SRC_FAV).convert("RGBA")
    sizes = [(16, "favicon-16.png"), (32, "favicon-32.png"), (180, "apple-touch-icon.png")]
    for size, name in sizes:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(PUBLIC / name)
    img32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    img32.save(PUBLIC / "favicon.ico", format="ICO", sizes=[(32, 32)])


def og_image():
    w, h = 1200, 630
    canvas = Image.new("RGBA", (w, h), (11, 11, 12, 255))
    draw = ImageDraw.Draw(canvas)

    for i, alpha in enumerate([0.35, 0.2]):
        r = 420 + i * 120
        grad = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        gd = ImageDraw.Draw(grad)
        cx, cy = w - 180 - i * 80, 120 + i * 60
        gd.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(255, 77, 58, int(255 * alpha)))
        canvas = Image.alpha_composite(canvas, grad)

    logo = Image.open(LOGO).convert("RGBA")
    logo.thumbnail((120, 120), Image.Resampling.LANCZOS)
    canvas.paste(logo, (72, 72), logo)

    try:
        title_font = ImageFont.truetype("arial.ttf", 52)
        sub_font = ImageFont.truetype("arial.ttf", 28)
    except OSError:
        title_font = ImageFont.load_default()
        sub_font = ImageFont.load_default()

    draw.text((220, 88), "Shrouded Development", fill=(250, 249, 247, 255), font=title_font)
    draw.text((220, 160), "Developer & Recruiter Onboarding", fill=(168, 164, 154, 255), font=sub_font)
    draw.rectangle((72, 240, 1128, 244), fill=(255, 77, 58, 255))
    draw.text((72, 280), "Official guides for commissions, tickets, and recruiting.", fill=(214, 212, 205, 255), font=sub_font)

    canvas.convert("RGB").save(OG_OUT, "PNG", optimize=True)


if __name__ == "__main__":
    favicons()
    og_image()
    print("Generated favicons and og-image.png")
