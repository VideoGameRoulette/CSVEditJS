const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      backgroundImage: {
        "datadisruptor": "url('/img/DataDisruptor.svg')",
        "nova": "url('/img/Nova.svg')",
        "sizenode": "url('/img/SizeNode.svg')",
        "drill": "url('/img/Drill.svg')",
        "powernode": "url('/img/PowerNode.svg')",
        "multidisruptor": "url('/img/MultiDisruptor.svg')",
        "healthnode": "url('/img/HealthNode.svg')",
        "healthnodefragment": "url('/img/HealthNodeFragment.svg')",
        "kilver": "url('/img/Kilver.svg')",
        "addressdisruptor1": "url('/img/AddressDisruptor1.svg')",
        "addressdisruptor2": "url('/img/AddressDisruptor2.svg')",
        "powernodefragment": "url('/img/PowerNodeFragment.svg')",
        "note": "url('/img/Note.svg')",
        "highjump": "url('/img/HighJump.svg')",
        "firewall": "url('/img/FireWall.svg')",
        "glitchteleport": "url('/img/GlitchTeleport.svg')",
        "rangenode": "url('/img/RangeNode.svg')",
        "tendrilstop": "url('/img/TendrilsTop.svg')",
        "dronegun": "url('/img/DroneGun.svg')",
        "passwordtool": "url('/img/PasswordTool.svg')",
        "voranj": "url('/img/Voranj.svg')",
        "verticalspread": "url('/img/VerticalSpread.svg')",
        "inertialpulse": "url('/img/InertialPulse.svg')",
        "grapple": "url('/img/Grapple.svg')",
        "tetheredcharge": "url('/img/TetheredCharge.svg')",
        "reflect": "url('/img/Reflect.svg')",
        "enhancedlaunch": "url('/img/EnhancedLaunch.svg')",
        "blackcoat": "url('/img/BlackCoat.svg')",
        "glitchbomb": "url('/img/GlitchBomb.svg')",
        "lightninggun": "url('/img/LightningGun.svg')",
        "shards": "url('/img/Shards.svg')",
        "droneteleport": "url('/img/DroneTeleport.svg')",
        "distortionfield": "url('/img/DistortionField.svg')",
        "datagrenade": "url('/img/DataGrenade.svg')",
        "tricone": "url('/img/TriCone.svg')",
        "tendrilsbottom": "url('/img/TendrilsBottom.svg')",
        "breachsuppressor": "url('/img/BreachSuppressor.svg')",
        "redcoat": "url('/img/RedCoat.svg')",
        "ionbeam": "url('/img/IonBeam.svg')",
        "scythe": "url('/img/Scythe.svg')",
        "walltrace": "url('/img/WallTrace.svg')",
        "flamethrower": "url('/img/FlameThrower.svg')",
        "swim": "url('/img/Swim.svg')"
      }
    }
  },
  variants: {
    textFillColor: ['responsive'],
    extends: {
      backgroundColor: ['checked', 'first', 'last', 'even', 'odd'],
      padding: ['responsive', 'first', 'last'],
      margin: ['responsive', 'first', 'last'],
    },
  },
  plugins: [],
}
