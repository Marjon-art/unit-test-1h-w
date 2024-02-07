export default function legend(args) {
  if(args.health > 50) {
    return "healthy";
  } else if (args.health <= 50 && args.health >= 15 ) {
    return "wounded";
  } else {
    return "critical";
  }
}

