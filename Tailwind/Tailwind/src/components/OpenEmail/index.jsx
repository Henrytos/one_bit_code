import EmailDate from "./EmailDate";
import ExitEmail from "./ExitEmail";
import Title from "./Title";

export default function OpenEmail({ email, setOpenEmail }) {
  const sentDate = new Date(email.createdAt);
  const openEmailDate = `${sentDate.toLocaleDateString()}, ${sentDate.toLocaleTimeString()}`;

  return (
    <div
      className="
   p-2 md:p-4 absolute lg:relative h-full w-full 
      bg-zinc-50 dark:bg-zinc-700
      text-zinc-900 dark:text-zinc-50
      grow-[2] basis-96 flex flex-col gap-4"
    >
      <ExitEmail setOpenEmail={setOpenEmail} />
      <Title>{email.subject}</Title>
      <EmailDate>{email.from}</EmailDate>
      <EmailDate>{openEmailDate}</EmailDate>

      <hr className="mt-4" />
      <div className=" text-lg">
        <strong>Menssage :</strong> {email.body}
      </div>
      {email.iframe && (
        <iframe width="560" height="315" src={email.iframe}></iframe>
      )}
    </div>
  );
}
