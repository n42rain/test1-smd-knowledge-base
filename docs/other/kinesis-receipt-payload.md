---
id: other-4
title: Kinesis Receipt Payload
sidebar_label: Kinesis Receipt Payload
---

# Understanding Kinesis Receipt Payload

## Table of Contents

***

* [Item Types](#item-types)
* [Receipt Types](#receipt-types)
* [Drawer Session vs Day Operation vs Attendant Tagging](#drawer-session-vs-day-operation-vs-attendant-tagging)
* [Payment Allocation in Line Item Attribute](#payment-allocation-in-line-item-attribute)
* [Cancelled Item](#cancelled-item)
* [Difference Between Receipt Number and Sequence Number](#difference-between-receipt-number-and-sequence-number)
* [Terminal Type and Terminal Id](#terminal-type-and-terminal-id)
* [Difference Between Payments and Payment Allocation](#difference-between-payments-and-payment-allocation)
* [Tags and Categories](#tags-and-categories)
* [Amount Attributes](#amount-attributes)
* [Discounts](#discounts)
* [Loyalty](#loyalty)
* [Price and Price Override](#price-and-price-override)

## Item Types

***

* There are 2 line item types:
    * cstore
    * fuel

## Receipt Types

***

* There are 3 Receipt types:
    * SALE
    * REFUND
    * VOID

## Drawer Session vs Day Operation vs Attendant Tagging

***

* Receipt will contain 1 of drawer session, day operation or attendant tagging.
* If 1 is included, the others will be null.

### Drawer Session

* Definition: _to fill_

```javascript
{
    ...
    "drawer_session": {
        "id": "654d962d699ab34e16157cda",
        "staff_id": 15068,
        "device_id": 70,
        "staff_name": "Mei Mei",
        "device_code": "16",
        "device_name": "POS P - Bandar Baru Bangi",
        "sequence_number": "16000046"
    },
    ...
}
```

### Day Operation

* Definition: _to fill_

```javascript
{
    ...
    "day_operation" : {
        "id" : "6555e19031e74a5e6f5888cb",
        "sequence_number" : "001269"
    },
    ...
}
```

### Attendant Tagging

* Definition: _to fill_

```javascript
{
    ...
    "forecourt_attendant": {
        "id": "6548aaad15c6ef5ef312fbeb",
        "card_id": 24,
        "card_pan": ".........0021",
        "staff_id": 15072,
        "staff_name": "Haiqal",
        "sequence_number": "000297"
    }
    ...
}
```

## Payment Allocation in line item attribute

***

* Definition: payment amount distributed to the line item.
* Payment allocation excludes rounding.
* Only includes a summary with `receipt_payment_id` which is the same as `payments.id`.
* Additional details such as card number can be get from `payments` attribute.
* Every `SALE` lineitem will have at least 1 payment allocation.
* Cancelled line items will have empty payment allocation.

## Cancelled Item

***

* Individual line item in a receipt can be cancelled, in which case the `cancel_details` attribute is present in `line_items`.

```javascript
{
    ...
    "cancel_details": {
        "staff_id": 15073,
        "staff_name": "Joey",
        "cancelled_at": "2023-11-17T15:33:55+08:00",
        "cancel_reason": "CANCEL_PURCHASE"
    },
    ...
}
```

## Difference Between Receipt Number and Sequence Number

***

## Terminal Type and Terminal Id

***

## Difference Between Payments and Payment Allocation

***

## Tags and Categories

***

## Amount Attributes

***

## Discounts

***

## Loyalty

***

## Price and Price Override

***

