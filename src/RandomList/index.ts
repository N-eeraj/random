import RandomNumber from "../RandomNumber"

export default class RandomList {
  static choice<ListItem>(list: Array<ListItem>): ListItem {
    return list[RandomNumber.int({ max: list.length - 1 })]
  }
}
