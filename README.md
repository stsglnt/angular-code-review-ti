# angular-ivy-lejcav

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-lejcav)

What can be improved: 

1. Add interfaces;
2. Move requests to ngOnInit()
3. End subscriptions / use async pipe;
4. Split tabs into components;
5. Use ChangeDetectionStrategy onPush;
6. Use trackBy;
7. Add date transformation on data receiving level instead of html so it is not bein run on every change detection cycle;
8. Add virtuall scroll;
9. Create fake paginated fetching. Instead of fetching all items at once fetch only set amount of element from ids array;
10. Use mergeMap instead of concatMap -> add sorting if order is important;
11. Add check for null and toLocaleLowerCase to filter;
12. Add request when user switch tab instead of having both of them in ngAfterContentInit