import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list = [];
  @Input() actions = [];
  @Input() selected: any;
  @Input() dropGroup = [];
  @Input() canOrder = true;
  @Output() onSelect = new EventEmitter();
  @Output() onChange = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  getImage(item) {
    if (item.thumbnail) {
      return item.thumbnail;
    }
    return item.title ? `https://img.youtube.com/vi/${item.id}/mqdefault.jpg` : '';
  }

  getTitle(item) {
    return item.title || item.name;
  }

  selectItem(item) {
    this.onSelect.emit(item);
  }

  onDrop() {
    this.onChange.emit(this.list);
  }


}
