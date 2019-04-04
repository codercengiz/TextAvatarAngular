import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';


@Directive({
  selector: 'avatar-text'
})
export class AvatartextDirective {

  constructor(private element: ElementRef) { }

  @Input() text: string;
  @Input() BackGroundColor: string;
 
  ngOnChanges(changes: SimpleChanges) {
    let text = changes['text'] ? changes['text'].currentValue.toUpperCase() : null;
    let color = changes['BackGroundColor'] ? changes['BackGroundColor'].currentValue : null;
    

    this.element.nativeElement.setAttribute("value", this.getAvatarTextfromString(text));
    this.element.nativeElement.style.backgroundColor = this.getRandomColor();
    
  }

 public getAvatarTextfromString(txt:string):string{
  let wordlist=txt.split(' ');
  let avatarText="";
  wordlist.forEach(word => {
      avatarText=avatarText.concat(word.charAt(0));
  });
  return avatarText;

 }

 

 getRandomColor() {
  var color = Math.floor(0x1000000 * Math.random()).toString(16);
  return '#' + ('000000' + color).slice(-6);
}
}