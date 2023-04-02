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
        "datadisruptor": "url('/CSVEditJS/img/DataDisruptor.svg')",
        "nova": "url('/CSVEditJS/img/Nova.svg')",
        "sizenode": "url('/CSVEditJS/img/SizeNode.svg')",
        "drill": "url('/CSVEditJS/img/Drill.svg')",
        "powernode": "url('/CSVEditJS/img/PowerNode.svg')",
        "multidisruptor": "url('/CSVEditJS/img/MultiDisruptor.svg')",
        "healthnode": "url('/CSVEditJS/img/HealthNode.svg')",
        "healthnodefragment": "url('/CSVEditJS/img/HealthNodeFragment.svg')",
        "kilver": "url('/CSVEditJS/img/Kilver.svg')",
        "addressdisruptor1": "url('/CSVEditJS/img/AddressDisruptor1.svg')",
        "addressdisruptor2": "url('/CSVEditJS/img/AddressDisruptor2.svg')",
        "powernodefragment": "url('/CSVEditJS/img/PowerNodeFragment.svg')",
        "note": "url('/CSVEditJS/img/Note.svg')",
        "highjump": "url('/CSVEditJS/img/HighJump.svg')",
        "firewall": "url('/CSVEditJS/img/FireWall.svg')",
        "glitchteleport": "url('/CSVEditJS/img/GlitchTeleport.svg')",
        "rangenode": "url('/CSVEditJS/img/RangeNode.svg')",
        "tendrilstop": "url('/CSVEditJS/img/TendrilsTop.svg')",
        "dronegun": "url('/CSVEditJS/img/DroneGun.svg')",
        "passwordtool": "url('/CSVEditJS/img/PasswordTool.svg')",
        "voranj": "url('/CSVEditJS/img/Voranj.svg')",
        "verticalspread": "url('/CSVEditJS/img/VerticalSpread.svg')",
        "inertialpulse": "url('/CSVEditJS/img/InertialPulse.svg')",
        "grapple": "url('/CSVEditJS/img/Grapple.svg')",
        "tetheredcharge": "url('/CSVEditJS/img/TetheredCharge.svg')",
        "reflect": "url('/CSVEditJS/img/Reflect.svg')",
        "enhancedlaunch": "url('/CSVEditJS/img/EnhancedLaunch.svg')",
        "blackcoat": "url('/CSVEditJS/img/BlackCoat.svg')",
        "glitchbomb": "url('/CSVEditJS/img/GlitchBomb.svg')",
        "lightninggun": "url('/CSVEditJS/img/LightningGun.svg')",
        "shards": "url('/CSVEditJS/img/Shards.svg')",
        "droneteleport": "url('/CSVEditJS/img/DroneTeleport.svg')",
        "distortionfield": "url('/CSVEditJS/img/DistortionField.svg')",
        "datagrenade": "url('/CSVEditJS/img/DataGrenade.svg')",
        "tricone": "url('/CSVEditJS/img/TriCone.svg')",
        "tendrilsbottom": "url('/CSVEditJS/img/TendrilsBottom.svg')",
        "breachsuppressor": "url('/CSVEditJS/img/BreachSuppressor.svg')",
        "redcoat": "url('/CSVEditJS/img/RedCoat.svg')",
        "ionbeam": "url('/CSVEditJS/img/IonBeam.svg')",
        "scythe": "url('/CSVEditJS/img/Scythe.svg')",
        "walltrace": "url('/CSVEditJS/img/WallTrace.svg')",
        "flamethrower": "url('/CSVEditJS/img/FlameThrower.svg')",
        "swim": "url('/CSVEditJS/img/Swim.svg')"
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
