```javascript
this.$toast.success('111')
this.$toast({
    type: 'success',
    message: '丑八怪',
    position: 'top',
    showClose: true,
    onClose: 111,
    // onClose: () => {
    //     console.log('close callback')
    // }
})
```