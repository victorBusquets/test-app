import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlight' })

export class HighlightText implements PipeTransform {
    transform(value: string, args: string): string {
        const regex = new RegExp(args, 'gi');
        return args ? value.replace(regex, "<span class='remark'>$&</span>") : value;
    }
}