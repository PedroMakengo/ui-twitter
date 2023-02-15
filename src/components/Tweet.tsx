interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

const tweetStyles = {
  borderRadius: 8,
};

export function Tweet({ user, children, likes }: TweetProps) {
  return (
    <div className="tweet" style={tweetStyles}>
      <h2>{user}</h2>
      <p>{children}</p>
      <button>Like {!likes ? '0' : likes}</button>
    </div>
  );
}
