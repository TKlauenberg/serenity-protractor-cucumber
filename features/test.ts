import { When, Then, BeforeAll } from "cucumber";
import { actorCalled, actorInTheSpotlight, engage } from "@serenity-js/core";
import { Start, RecordItem, RecordedItems, Actors } from "./support";
import { Ensure, contain } from "@serenity-js/assertions";

BeforeAll(() => {
  engage(new Actors())
})

When('{word} records item {string}', (actor, item) =>
  actorCalled(actor).attemptsTo(
    Start.withAnEmptyList(),
    RecordItem.called(item)
  ));

Then('on the to list should be the item {string}', (item) =>
  actorInTheSpotlight()
    .attemptsTo(Ensure.that(RecordedItems(), contain(item))));