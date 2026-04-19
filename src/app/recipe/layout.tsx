
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        {children}
        <script
     src="https://supportly-ai.vercel.app/chatBot.js"
     data-owner-id="usr_121269372684601098">
</script>
</div>
  );
}
