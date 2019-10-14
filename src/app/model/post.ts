export class Post {

  private title: string;
  private content: string;
  private loveIts: number;
  private createdAt: Date;


  constructor(title: string, content: string, loveIts: number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = new Date();
  }

  get getTitle(): string {
    return this.title;
  }

  set setTitle(value: string) {
    this.title = value;
  }

  get getContent(): string {
    return this.content;
  }

  set setContent(value: string) {
    this.content = value;
  }

  get getLoveIts(): number {
    return this.loveIts;
  }

  set setLoveIts(value: number) {
    this.loveIts = value;
  }

  get getCreatedAt(): Date {
    return this.createdAt;
  }

  set setCreatedAt(value: Date) {
    this.createdAt = value;
  }
};
