export class Post {

  private title: string;
  private content: string;
  private loveIts: number;
  private createdAt: Date;


  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.createdAt = new Date();
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(value: string) {
    this.title = value;
  }

  getContent(): string {
    return this.content;
  }

  setContent(value: string) {
    this.content = value;
  }

  getLoveIts(): number {
    return this.loveIts;
  }

  setLoveIts(value: number) {
    this.loveIts = value;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }
};
