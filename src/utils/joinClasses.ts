export default function joinClasses(...args) {
  let s = "";
  for (let i = 0; i < args.length; i++) {
    s = s.concat(" ", args[i]);
  }
  return s;
}
