export default function DividerWithText({ text }: { text: string }) {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-white"></div>
      <span className="flex-shrink mx-4 text-white">{text}</span>
      <div className="flex-[20] border-t border-white"></div>
    </div>
  );
}
