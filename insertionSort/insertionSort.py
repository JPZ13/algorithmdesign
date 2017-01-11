def insertion_sort( arr ):
    for i in arr:
        j = i
        while j > 0 and arr[ j ] < arr[ j - 1 ]:
            swap = arr[ j ]
            arr[ j ] = arr[ j - 1 ]
            arr[ j - 1 ] = swap
            j = j - 1
