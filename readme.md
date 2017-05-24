# Ionic With Google Api
Ionic Issues and Workout

## Major Issues
  * Cannot Find namespace
  * Cannot find property of undefined while running
  * Cannot find property of a nativeElement

### Installation
  Need to Have the below versions
    Typescript->2.3.2
    Node->6.10.2
    Npm->4.6.1
    googlemaps->3.26.11 

```
npm install --save @types/googlemaps 
```
```
npm install @types/googlemaps --save-dev --save-exact
```
### Import Statements

```
import {} from '@types/googlemaps'
```
### Fix 
  To fix cannot reference issue when tapping on map tab, we need to add either the below two in our code
  ```
  ionViewDidLoad()
  ```
  ```
  ngAfterViewInit()
  ```
  
