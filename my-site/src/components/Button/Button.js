export default function Button({ className, text, ...restProps }) {
  return (
    <button className={className} {...restProps}>
      {text}
    </button>
  );
}
