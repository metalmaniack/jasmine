import { greet } from "./myFunction"

describe ('My Functions', ()=>{
  it('Should greet',()=>{
    const expectedName='Roger';
    const result = greet(expectedName);
    expect(result).toContain(expectedName);
  })
})
