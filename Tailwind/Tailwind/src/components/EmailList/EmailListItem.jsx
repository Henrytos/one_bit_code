import Avatar from "./Avatar";

/* eslint-disable react/prop-types */
const EmailListItem = ({ email, onClick }) => (
  <article
    className="
      flex items-center gap-4 [&+li]:mt-1 p-2 
      hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900
      rounded-lg transition-colors"
    onClick={onClick}
  >
    <Avatar letter={email.from[0].toUpperCase()} />
    <div className="grow shrink basis-40">
      <strong>{email.subject}</strong>
      <p>
        {email.body.length > 64 ? email.body.slice(0, 64) + "..." : email.body}
      </p>
    </div>
  </article>
);

export default EmailListItem;
