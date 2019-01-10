import { TestBed} from '@angular/core/testing';
import { TempDataService } from '../services/temp-data.service';
import { Sitter } from '../entities/sitter';
import { TransformBoolean } from './sitters-transform-boolean.filter';

// 1.0: Valid data: Search "Azat Baran" should give 1 result, Azat Baran
// 1.1: Valid data: Search "azat" should give 1 result, Azat Baran.
// 1.2:
// 1.3:

// 2.0: Invalid data: Search 'Azat' with undefined array.
// 2.1: 

describe('Transform boolean no child record', () => {
    TestBed.configureTestingModule({
     declarations: [
       TransformBoolean
     ]
   });

   it('should return yes', () => {
    // Arrange
    const sitters: Sitter[] = TempDataService.getInitialSitterTestState().sitters;
    const transformBoolean: TransformBoolean = new TransformBoolean();

    //Act
    console.log(sitters[0]);
    const result = transformBoolean.transform(sitters[0].noChildRecord);

    //Assert (expect)
    expect(result).toBe("Yes");
   });

 });
