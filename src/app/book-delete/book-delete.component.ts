import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  book: Book = {};
  message: string;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.bookService.getById(id).subscribe(book => {
      this.book = book;
    });
  }

  onDelete(): void {
    this.bookService.deleteOneBook(this.book.id).subscribe(() => {
      this.message = 'Xoá sách thành công';
    });
  }
}
