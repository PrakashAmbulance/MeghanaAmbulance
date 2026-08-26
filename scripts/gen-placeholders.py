"""
Generates placeholder SVG imagery for the Meghana Ambulance Service site.

These are clearly-labelled placeholders standing in for the client's real
ambulance photography (AmbulanceFront.jpeg, AmbulanceBack.jpeg,
AmbulanceSide.jpeg, AmbulanceInside.jpeg, AmbulanceFrontFull.jpeg), which
were referenced in the brief but not actually supplied as files in this
session. Replace the files in /public/images/gallery and /public/images/hero
with the real photos — same filenames — and these placeholders disappear
automatically.
"""
import os

OUT_HERO = "/home/claude/meghana-ambulance/public/images/hero"
OUT_GALLERY = "/home/claude/meghana-ambulance/public/images/gallery"

NAVY_900 = "#0a1a2e"
NAVY_700 = "#163358"
MEDBLUE = "#2b83f0"
WHITE = "#ffffff"
RED = "#dc2626"

AMBULANCE_ICON = """
<g transform="translate({tx},{ty}) scale({scale})" fill="none">
  <rect x="0" y="40" width="220" height="90" rx="10" fill="{white}"/>
  <rect x="0" y="40" width="70" height="90" rx="10" fill="{white}" stroke="{navy}" stroke-width="3"/>
  <rect x="60" y="40" width="160" height="90" rx="10" fill="{white}" stroke="{navy}" stroke-width="3"/>
  <rect x="14" y="55" width="42" height="34" rx="4" fill="#bcdcff"/>
  <rect x="90" y="55" width="34" height="30" rx="4" fill="#bcdcff"/>
  <rect x="140" y="55" width="34" height="30" rx="4" fill="#bcdcff"/>
  <rect x="188" y="70" width="24" height="20" rx="3" fill="#bcdcff"/>
  <circle cx="45" cy="132" r="16" fill="{navy}"/>
  <circle cx="45" cy="132" r="7" fill="{white}"/>
  <circle cx="175" cy="132" r="16" fill="{navy}"/>
  <circle cx="175" cy="132" r="7" fill="{white}"/>
  <rect x="95" y="20" width="14" height="34" rx="3" fill="{red}"/>
  <rect x="85" y="30" width="34" height="14" rx="3" fill="{red}"/>
  <rect x="60" y="98" width="150" height="10" fill="{red}" opacity="0.85"/>
</g>
""".strip()

def ambulance_scene(width, height, label, sublabel, seed_hue=0):
    icon = AMBULANCE_ICON.format(
        tx=width / 2 - 110, ty=height / 2 - 70, scale=1.0, white=WHITE, navy=NAVY_900, red=RED
    )
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{NAVY_900}"/>
      <stop offset="100%" stop-color="{NAVY_700}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="{WHITE}" stroke-opacity="0.05"/>
    </pattern>
  </defs>
  <rect width="{width}" height="{height}" fill="url(#bg)"/>
  <rect width="{width}" height="{height}" fill="url(#grid)"/>
  <circle cx="{width*0.85}" cy="{height*0.15}" r="{height*0.35}" fill="{MEDBLUE}" opacity="0.18"/>
  {icon}
  <text x="50%" y="{height - 46}" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="{WHITE}" font-weight="700">{label}</text>
  <text x="50%" y="{height - 20}" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="{WHITE}" opacity="0.65">{sublabel}</text>
</svg>"""

def write(path, svg):
    with open(path, "w") as f:
        f.write(svg)
    print("wrote", path)

os.makedirs(OUT_HERO, exist_ok=True)
os.makedirs(OUT_GALLERY, exist_ok=True)

write(os.path.join(OUT_HERO, "hero-ambulance.svg"),
      ambulance_scene(1200, 1200, "Meghana Ambulance Service", "Client photo placeholder — replace with real ambulance image"))

gallery_items = [
    ("AmbulanceFront.jpeg".replace(".jpeg", ".svg"), "Front View", "Placeholder — add client photo"),
    ("AmbulanceFrontFull.jpeg".replace(".jpeg", ".svg"), "Front View (Full)", "Placeholder — add client photo"),
    ("AmbulanceBack.jpeg".replace(".jpeg", ".svg"), "Rear View", "Placeholder — add client photo"),
    ("AmbulanceSide.jpeg".replace(".jpeg", ".svg"), "Side View", "Placeholder — add client photo"),
    ("AmbulanceInside.jpeg".replace(".jpeg", ".svg"), "Interior", "Placeholder — add client photo"),
]
for fname, label, sub in gallery_items:
    write(os.path.join(OUT_GALLERY, fname), ambulance_scene(900, 700, label, sub))

# Simple logo mark
logo_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="240" height="60" viewBox="0 0 240 60">
  <rect x="0" y="8" width="44" height="44" rx="10" fill="{NAVY_900}"/>
  <rect x="16" y="18" width="12" height="24" rx="2" fill="{WHITE}"/>
  <rect x="10" y="24" width="24" height="12" rx="2" fill="{WHITE}"/>
  <rect x="10" y="24" width="24" height="12" fill="{RED}" opacity="0"/>
  <text x="54" y="27" font-family="Arial, sans-serif" font-size="17" font-weight="800" fill="{NAVY_900}">Meghana</text>
  <text x="54" y="46" font-family="Arial, sans-serif" font-size="12" font-weight="600" fill="{MEDBLUE}" letter-spacing="0.5">AMBULANCE SERVICE</text>
</svg>"""
write("/home/claude/meghana-ambulance/public/images/logo.svg", logo_svg)

# OG image
og = ambulance_scene(1200, 630, "Meghana Ambulance Service", "24/7 Ambulance Service in Bangalore")
write("/home/claude/meghana-ambulance/public/images/og-image.svg", og)
