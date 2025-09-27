export default function ButtonWrapper({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor: string;
}) {
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
          width: "100%",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 24,
          cursor: "pointer",
          fontWeight: "bold",
          borderRadius: 8,
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        {children}
      </div>
    </>
  );
}
