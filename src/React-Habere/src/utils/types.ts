export type ChatMessage = {
  title: string;
  role: string;
  content: string;
};

export type Message = {
  BOT: string;
  USER: string;
};

export type Chat = {
  title: string;
  messages: Message[];
};

export type Habit = {
  id: number;
  name: string;
  description: string;
  category: string;
  email: string;
  streak: number;
}

export type Account = {
  name: string;
  email: Message[];
};

// will need updating at some point
export type FormData = {
  name: string;
  description: string;
}
