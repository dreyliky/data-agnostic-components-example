import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges
} from '@angular/core';

@Component({
    selector: 'alphabetical-list',
    templateUrl: './alphabetical-list.component.html',
    styleUrls: ['./alphabetical-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphabeticalListComponent<T> implements OnChanges {
    @Input()
    public data!: T[];

    @Input()
    public labelHandler: (item: T) => string = (item) => (item as string);

    public letters!: string[];
    public sectionMap!: Map<string, T[]>;

    public ngOnChanges(): void {
        this.initSectionMap(this.data);
        this.initLetters();
    }

    private initSectionMap(data: T[]): void {
        this.sectionMap = new Map();

        data.forEach((item) => {
            const key = this.extractFirstLetterFromLabel(item);
            const value = (this.sectionMap.get(key) ?? []);

            value.push(item);
            this.sectionMap.set(key, value);
        });
    }

    private initLetters(): void {
        this.letters = [...this.sectionMap.keys()];
    }

    private extractFirstLetterFromLabel(item: T): string {
        const label = this.labelHandler(item);
        const firstLetter = label[0].toUpperCase();

        return firstLetter;
    }
}
