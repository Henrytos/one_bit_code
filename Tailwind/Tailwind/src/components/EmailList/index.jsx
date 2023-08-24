import emails from "../../emails.json";
import EmailListItem from "./EmailListItem";

export default function EmailList({ setOpenEmail }) {
  return (
    <div className="relative overflow-y-scroll flex-grow">
      {emails.map((email) => (
        <EmailListItem
          key={email.id}
          email={email}
          onClick={() => setOpenEmail(email)}
        />
      ))}
    </div>
  );
}
