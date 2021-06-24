import { TextBoxControl } from 'app/models/form/controls/text-box-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CommentsControl extends TextBoxControl {
  key   = 'comments';
  label = 'Comments';
}
