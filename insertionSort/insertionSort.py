def insertion_sort( arr ):
    for index in range(1, len(arr)):
        position = index
        while position > 0 and arr[position - 1] > arr[position]:
            swap = arr[position]
            arr[position] = arr[position - 1]
            arr[position - 1] = swap
            position = position - 1

    return arr
